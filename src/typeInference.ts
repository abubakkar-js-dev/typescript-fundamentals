function validateForm(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}): boolean {
  const email: string = formData.email;
  const age: number = formData.age;
  const isAdmin: boolean = formData.isAdmin;

  if (email.includes("@") && age > 18 && isAdmin !== undefined) {
    return true;
  }

  return false;
}
function validateForm2(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}) {
  const email = formData.email;
  const age = formData.age;
  const isAdmin = formData.isAdmin;

  if (email.includes("@") && age > 18 && isAdmin !== undefined) {
    return true;
  }

  return false;
}
