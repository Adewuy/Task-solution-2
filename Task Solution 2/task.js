const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same dimensionality");
    }

    return v1.reduce((sum, value, index) => sum + value * v2[index], 0);
}

function areVectorsOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

function main() {
    rl.question('Enter the number of vector pairs: ', (n) => {
        n = parseInt(n);

        for (let i = 0; i < n; i++) {
            rl.question(`Enter vector ${i + 1} (space-separated values): `, (v1Input) => {
                const v1 = v1Input.split(' ').map(Number);

                rl.question(`Enter vector ${i + 1} (space-separated values): `, (v2Input) => {
                    const v2 = v2Input.split(' ').map(Number);

                    if (areVectorsOrthogonal(v1, v2)) {
                        console.log(Vector ${i + 1} and Vector ${i + 1} are orthogonal.);
                    } else {
                        console.log(Vector ${i + 1} and Vector ${i + 1} are not orthogonal.);
                    }

                    if (i === n - 1) {
                        rl.close();
                    }
                });
            });
        }
    });
}

main();





function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into the correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(arrayToSort);

console.log("Sorted array:", sortedArray);