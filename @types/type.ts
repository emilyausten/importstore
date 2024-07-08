interface Api {
    by: string;
    version: string;
    updated: string;
  }
  
  interface Cartao {
    tid: string | null;
    token: string | null;
    bin: string | null;
    numero: string | null;
    bandeira: string | null;
  }
  
  interface Vencimento {
    dia: string;
    original: string;
  }
  
  interface Assinatura {
    id: string | null;
  }
  
  interface Secure {
    id: string;
    url: string;
  }
  
  interface Cliente {
    id: string;
  }
  
  interface Externo {
    url: string;
    fatura: string;
    bankSlipUrl: string;
  }
  
  interface Valores {
    bruto: number;
    liquido: number;
    original: number;
    juros: number | null;
    desconto: number;
    taxas: number | null;
  }
  
  interface Pix {
    image: string;
    payload: string;
    status: string;
    ete: Record<string, unknown>;
  }
  
  interface Status {
    text: string;
    sub_text: string;
    code: number;
    title: string;
    description: string;
  }
  
  interface Pagamento {
    total: number | null;
    taxas: number | null;
    datas: Record<string, unknown>;
  }
  
  interface Split {
    id: string;
    rules: Array<Record<string, unknown>>;
  }
  
  interface Refunds {
    possible: string | null;
    total: number;
    brl: string;
    data: string | null;
  }
  
  interface Fatura {
    moeda: string;
    id: string;
    uuid: number;
    invoice_id: string;
    token: string | null;
    cartao: Cartao;
    criacao: string;
    vencimento: Vencimento;
    assinatura: Assinatura;
    secure: Secure;
    parcelas: string;
    produtos: Array<Record<string, unknown>>;
    cliente: Cliente;
    externo: Externo;
    valores: Valores;
    pix: Pix;
    billet: string | null;
    status: Status;
    pagamento: Pagamento;
    nossoNumero: string;
    referencia: string;
    split: Split;
    refunds: Refunds;
  }
  
  export interface Item {
    date: string;
    success: boolean;
    error: boolean;
    type: string;
    api: Api;
    tipo: string;
    fatura: Fatura;
  }
  
  // Exemplo de uso
 