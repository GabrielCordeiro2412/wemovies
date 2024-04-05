// apiService.ts
import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/Product';

const baseURL = 'http://localhost:3000';

// Função para buscar todos os produtos da API
export async function getProdutos(): Promise<Product[]> {
    try {
        const response: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao buscar produtos`);
    }
}

// Função para filtrar produtos por nome
export async function filtrarProdutosPorNome(nome: string): Promise<Product[]> {
    try {
        const response: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
        return response.data.filter(produto => produto.title.toLowerCase().includes(nome.toLowerCase()));
    } catch (error) {
        throw new Error(`Erro ao filtrar produtos`);
    }
}
