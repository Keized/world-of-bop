const Contract = artifacts.require('./Add.sol');


contract('test', accounts => {
    let contract;

    before(async () => {
        contract = await Contract.deployed();
    })

    describe("Sum", () => {
        describe("init Sum", () => {
            it(`it should compute sum`, async () => {
                const res =  await contract.Sum(10,2);
                const res2 = await contract.getSum();

                console.log(res2);
            });
        });
    });
});
