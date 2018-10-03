const dest = document.getElementById("main")

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}


document.getElementById("findButton").onclick = function findAll() {

    let anagrams = {}

    for (i = 0; i <= words.length; i++) {
        let word = words[i];
        const value = alphabetize(word)
        let typedText = document.getElementById("input").value;


        if (value in anagrams) {
            anagrams[value].push(word);
        } else {
            anagrams[value] = [word];
        }


        if (anagrams[value].length > 4) {
            let newSpan = document.createElement("span")
            let result = document.createTextNode(anagrams[value] + "---")
            dest.appendChild(newSpan)
            newSpan.appendChild(result)


        }



    }
}
