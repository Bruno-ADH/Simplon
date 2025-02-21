function fetchData() {
    setTimeout(() => {
        console.log("Exo1 Données récupérées");
    }, 2000);
}
fetchData()

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Exo2 Résultat obtenu")
        }, 3000)
    })
}

async function showData() {
    const data = await getData()
    console.log('data :>> ', data);
}

showData()

function checkWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const wth = Math.random() < 0.5 ? "Ensoleillé" : "Pluvieux"
            resolve(wth)
        }, 2000)
    })
}

checkWeather().then(p => console.log('Exo3: Le temps est ', p))