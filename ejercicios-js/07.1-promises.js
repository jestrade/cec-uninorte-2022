const movies = [{ id: 1, name: "Iron Man" }, { id: 2, name: "Thor" }, { id: 3, name: "Avengers" }];
const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (movies.length > 0) {
                resolve(movies);
            } else {
                reject("ocurrió un error");
            }
        }, 3000);
    });
};

const init = async () => {
    console.log("inicio");
    try {
        const result = await getMovies();
        console.log(`las películas son: ${JSON.stringify(result)}`);
    } catch (error) {
        console.log(error);
    }

    console.log("fin");
};

init();

