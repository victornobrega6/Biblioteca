export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
<<<<<<< HEAD
=======

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z\s]+$/;
  return name.length >= 3 && nameRegex.test(name);
};
>>>>>>> dc75fa3 (refactor: mudança de código)
  
  export const isValidPrice = (price: number): boolean => {
    return price > 0;
  };