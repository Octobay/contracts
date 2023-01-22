/* eslint-disable */
const { BigNumber } = require('@ethersproject/bignumber');
const { expect } = require('chai');
require('@nomiclabs/hardhat-waffle');
const truffleAssert = require('truffle-assertions');
const { ethers } = require("hardhat");

describe.only('BountyFactory', () => {
	let openQImplementation;
	let openQProxy;
	let bountyFactory;

	// BOUNTY TYPES
	let ATOMIC_CONTRACT = 0;
	let ONGOING_CONTRACT = 1;
	let TIERED_PERCENTAGE_CONTRACT = 2;
	let TIERED_FIXED_CONTRACT = 3;

	let randomContractUpgradeAddress;

	let OpenQImplementation;
	let OpenQProxy;

	let AtomicBountyV1;
	let OngoingBountyV1;
	let TieredPercentageBountyV1;
	let TieredFixedBountyV1;

	let BountyBeacon;
	let BountyFactory;

	let oracle;
	let owner;
	let notOpenQ;
	let claimManager;
	let depositManager;

	let atomicBountyInitOperation;
	let ongoingBountyInitOperation;
	let tieredPercentageBountyInitOperation;
	let tieredFixedBountyInitOperation;

	const mockOpenQId = "mockOpenQId"
	const mockId = "mockId";
	const mockOrganization = "mockOrganization";

	beforeEach(async () => {
		OpenQImplementation = await hre.ethers.getContractFactory('OpenQV1');
		OpenQProxy = await hre.ethers.getContractFactory('OpenQProxy');
		const MockLink = await ethers.getContractFactory('MockLink');
		BountyFactory = await hre.ethers.getContractFactory('BountyFactory');
		BountyBeacon = await hre.ethers.getContractFactory('BountyBeacon');
		
		AtomicBountyV1 = await hre.ethers.getContractFactory('AtomicBountyV1');
		OngoingBountyV1 = await hre.ethers.getContractFactory('OngoingBountyV1');
		TieredPercentageBountyV1 = await hre.ethers.getContractFactory('TieredPercentageBountyV1');
		TieredFixedBountyV1 = await hre.ethers.getContractFactory('TieredFixedBountyV1');

		[owner, oracle, notOpenQ, claimManager, depositManager] = await ethers.getSigners();

		mockLink = await MockLink.deploy();
		await mockLink.deployed();

		// Deploy OpenQV1 Implementation
		openQImplementation = await OpenQImplementation.deploy();
		await openQImplementation.deployed();

		// BOUNTY IMPLEMENTATION
		atomicBountyV1 = await AtomicBountyV1.deploy();
		await atomicBountyV1.deployed();
		
		ongoingBountyV1 = await OngoingBountyV1.deploy();
		await ongoingBountyV1.deployed();
		
		tieredPercentageBountyV1 = await TieredPercentageBountyV1.deploy();
		await tieredPercentageBountyV1.deployed();
		
		tieredFixedBountyV1 = await TieredFixedBountyV1.deploy();
		await tieredFixedBountyV1.deployed();

		// BOUNTY BEACONS
		atomicBountyBeacon = await BountyBeacon.deploy(atomicBountyV1.address);
		await atomicBountyBeacon.deployed();

		ongoingBountyBeacon = await BountyBeacon.deploy(ongoingBountyV1.address);
		await ongoingBountyBeacon.deployed();

		tieredPercentageBountyBeacon = await BountyBeacon.deploy(tieredPercentageBountyV1.address);
		await tieredPercentageBountyBeacon.deployed();

		tieredFixedBountyBeacon = await BountyBeacon.deploy(tieredFixedBountyV1.address);
		await tieredFixedBountyBeacon.deployed();

		// Deploy OpenQProxy with the previously deployed OpenQV1 implementation's address
		openQProxy = await OpenQProxy.deploy(openQImplementation.address, []);
		await openQProxy.deployed();

		// Attach the OpenQV1 ABI to the OpenQProxy address to send method calls to the delegatecall
		openQProxy = await OpenQImplementation.attach(openQProxy.address);

		// Initialize the OpenQProxy
		await openQProxy.initialize();

		// Deploy BountyFactory
		bountyFactory = await BountyFactory.deploy(
			openQProxy.address,
			atomicBountyBeacon.address,
			ongoingBountyBeacon.address,
			tieredPercentageBountyBeacon.address,
			tieredFixedBountyBeacon.address
			);
		await bountyFactory.deployed();
		
		// INIT DATA
		const abiCoder = new ethers.utils.AbiCoder;

		const abiEncodedParamsAtomic = abiCoder.encode(["bool", "address", "uint256", "bool", "bool", "bool", "string", "string", "string"], [true, mockLink.address, 100, true, true, true, mockOpenQId, "", ""]);
		atomicBountyInitOperation = [ATOMIC_CONTRACT, abiEncodedParamsAtomic];

		let abiEncodedParamsOngoing = abiCoder.encode(["address", "uint256", "bool", "address", "uint256", "bool", "bool", "bool", "string", "string", "string"], [mockLink.address, '100', true, mockLink.address, '100', true, true, true, mockOpenQId, "", ""]);
		ongoingBountyInitOperation = [ONGOING_CONTRACT, abiEncodedParamsOngoing];

		const abiEncodedParamsTieredBounty = abiCoder.encode(["uint256[]", "bool", "address", "uint256", "bool", "bool", "bool", "string", "string", "string"], [[80, 20], true, mockLink.address, '100', true, true, true, mockOpenQId, "", ""]);
		tieredPercentageBountyInitOperation = [TIERED_PERCENTAGE_CONTRACT, abiEncodedParamsTieredBounty];

		const abiEncodedParamsTieredFixedBounty = abiCoder.encode(["uint256[]", "bool", "address", "uint256", "bool", "bool", "bool", "string", "string", "string"], [[80, 20], true, mockLink.address, '100', true, true, true, mockOpenQId, "", ""]);
		tieredFixedBountyInitOperation = [TIERED_FIXED_CONTRACT, abiEncodedParamsTieredFixedBounty];
	});

	describe('constructor', () => {
		it('should initiatlize with correct OpenQ proxy address and BountyBeacon address', async () => {
			expect(await bountyFactory.openQ()).equals(openQProxy.address);
			expect(await bountyFactory.atomicBountyBeacon()).equals(atomicBountyBeacon.address);
			expect(await bountyFactory.ongoingBountyBeacon()).equals(ongoingBountyBeacon.address);
			expect(await bountyFactory.tieredPercentageBountyBeacon()).equals(tieredPercentageBountyBeacon.address);
			expect(await bountyFactory.tieredFixedBountyBeacon()).equals(tieredFixedBountyBeacon.address);
		});
	});

	describe('Access Controls', () => {
		it('should revert if called directly, not through OpenQProxy', async () => {
			await expect(bountyFactory.mintBounty(mockOpenQId, owner.address, organization, claimManager.address, depositManager.address, initOperation)).to.be.revertedWith('Method is only callable by OpenQ');
		});
	});

	describe('mintBounty', () => {
		it.only('should mint a bounty with expected data - ATOMIC', async () => {
			// Must redeploy and pretend that owner account is OpenQ in order to call BountyFactory.mintBounty
			let newBountyFactory = await BountyFactory.deploy(
				owner.address,
				atomicBountyBeacon.address,
				ongoingBountyBeacon.address,
				tieredPercentageBountyBeacon.address,
				tieredFixedBountyBeacon.address
				);
			await newBountyFactory.deployed();

			let initializationTimestamp = await setNextBlockTimestamp();

			const txn = await newBountyFactory.mintBounty(
				mockId,
				owner.address,
				mockOrganization,
				claimManager.address,
				depositManager.address,
				atomicBountyInitOperation
			);

			const receipt = await txn.wait();

			const newBounty = await AtomicBountyV1.attach(receipt.events[0].address);

			await expect(await newBounty.bountyId()).equals(mockId);
			await expect(await newBounty.issuer()).equals(owner.address);
			await expect(await newBounty.organization()).equals(mockOrganization);
			await expect(await newBounty.status()).equals(0);
			await expect(await newBounty.openQ()).equals(owner.address);
			await expect(await newBounty.claimManager()).equals(claimManager.address);
			await expect(await newBounty.depositManager()).equals(depositManager.address);
			await expect(await newBounty.bountyCreatedTime()).equals(initializationTimestamp);
			await expect(await newBounty.bountyType()).equals(ATOMIC_CONTRACT);
			await expect(await newBounty.hasFundingGoal()).equals(true);
			await expect(await newBounty.fundingToken()).equals(mockLink.address);
			await expect(await newBounty.fundingGoal()).equals(100);
			await expect(await newBounty.invoiceable()).equals(true);
			await expect(await newBounty.kycRequired()).equals(true);
			await expect(await newBounty.externalUserId()).equals(mockOpenQId);
			await expect(await newBounty.supportingDocuments()).equals(true);

			await expect(newBounty.initialize('mock-id', owner.address, 'mock-organization', owner.address, claimManager.address, depositManager.address, atomicBountyInitOperation)).to.be.revertedWith('Initializable: contract is already initialized');
		});
	});
});

async function setNextBlockTimestamp() {
	return new Promise(async (resolve,) => {
		const blockNumBefore = await ethers.provider.getBlockNumber();
		const blockBefore = await ethers.provider.getBlock(blockNumBefore);
		const timestampBefore = blockBefore.timestamp;
		const expectedTimestamp = timestampBefore + 10;
		await network.provider.send("evm_setNextBlockTimestamp", [expectedTimestamp]);
		resolve(expectedTimestamp);
	});
}