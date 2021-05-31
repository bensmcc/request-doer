import axios from 'axios';
import { performance } from 'perf_hooks';



const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

const main = async () => {
    for (var i = 0; i < 10000; i++) {
        const request = axios.get(`putSomeUrlHere?timestamp=${performance.now()}`);

        const start = performance.now();
        const result = await request;
        const end = performance.now();

        console.log(`\t\t Took: ${end - start}ms. Version: ${result.data.version}`)

        await timer(1000);
    }
}

main();