import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/Product';

const baseURL = 'http://localhost:3000';

export async function getProdutos(): Promise<Product[]> {
    try {
        const response: AxiosResponse<Product[]> = await axios.get(`${baseURL}/products`);
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao buscar produtos`);
    }
}
