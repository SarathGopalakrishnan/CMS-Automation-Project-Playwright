import { test, expect} from '@playwright/test';


//will skip the test
test.skip('This Test is Skiiped', async({ page }) => {

})


// //will mark test as failure will show error if the test does fail
test('not yet ready', async({ page }) => {
    test.fail()
})

// // test will be absorted

test.fixme('Fix the test', async({ page }) => {

})

// // marks the test as slow and triples the test timeout

test('slow test', async ({ page }) => {
    test.slow();
})

// test.only('Run this test only', async ( { page }) => {
//     //Run only this focused tests in the entire project
// });


// tsgs used with command grep 
test('Test Login page Contains @smoke', async({ page }) =>
{

});

