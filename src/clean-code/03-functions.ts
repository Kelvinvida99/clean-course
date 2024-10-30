(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface MovieInfo {
    title: string;
    description: string;
    rating: string;
    cast: string;
  }

  function createMovie({ title, description, rating, cast }: MovieInfo) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor", birthdate);
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    let result: number;

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
