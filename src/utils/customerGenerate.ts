import {
  cities,
  names,
  nomesBrasileiros,
  sobrenomesBrasileiros,
  states,
  streets,
  validCEPs,
} from "./fakeELements";

function getRandomElement(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCPF() {
  const randomDigit = () => Math.floor(Math.random() * 10);

  // Gera os 9 primeiros dígitos do CPF
  const cpf = Array.from({ length: 9 }, randomDigit);

  // Calcula o primeiro dígito verificador
  let sum = cpf.reduce((acc, value, idx) => acc + value * (10 - idx), 0);
  let digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  cpf.push(digit);

  // Calcula o segundo dígito verificador
  sum = cpf.reduce((acc, value, idx) => acc + value * (11 - idx), 0);
  digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  cpf.push(digit);

  // Formata o CPF
  return (
    cpf.slice(0, 3).join("") +
    cpf.slice(3, 6).join("") +
    cpf.slice(6, 9).join("") +
    cpf.slice(9).join("")
  );
}

function generateEmail(name: string) {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  return `${name.toLowerCase().replace(" ", ".")}${Math.floor(
    Math.random() * 1000
  )}@${getRandomElement(domains)}`;
}

function generatePhone() {
  const num = () => Math.floor(Math.random() * 10);
  return `${num()}${num()}${num()}${num()}${num()}-${num()}${num()}${num()}${num()}${num()}${num()}`;
}

function generateIP() {
  const num = () => Math.floor(Math.random() * 256);
  return `${num()}.${num()}.${num()}.${num()}`;
}

function generateAddress() {
  return {
    street: `${getRandomElement(streets)} ${getRandomElement(names)}`,
    number: Math.floor(Math.random() * 1000).toString(),
    district: `Bairro ${getRandomElement(names)}`,
    city: getRandomElement(cities),
    state: getRandomElement(states),
    zipcode: "72710070",
  };
}

export function generateFakeClient() {
  const firstName = getRandomElement(nomesBrasileiros);
  const lastName = getRandomElement(sobrenomesBrasileiros);
  const fullName = `${firstName} ${lastName}`;

  return {
    name: fullName,
    document: generateCPF(),
    email: generateEmail(fullName),
    phone: generatePhone(),
    ip: generateIP(),
    address: generateAddress(),
  };
}

function generateCEP() {
  // Escolhe aleatoriamente uma cidade da lista de CEPs válidos
  const city: any = getRandomElement(Object.keys(validCEPs));
  // Escolhe aleatoriamente um CEP da lista de CEPs válidos dessa cidade
  //@ts-ignore
  const cep: any = getRandomElement(validCEPs[city] as any);
  return cep;
}
