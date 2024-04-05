import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '../types/Product';

interface CarrinhoContextData {
    carrinhoItems: Product[];
    itemCount: number;
    adicionarAoCarrinho: (produto: Product) => void;
    removerDoCarrinho: (produtoId: number) => void;
    removerTodosDoCarrinho: (produtoId: number) => void;
    calcularSubtotalItem: (produtoId: number) => number;
    calcularSubtotalCarrinho: () => number;
    limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextData>({
    carrinhoItems: [],
    itemCount: 0,
    adicionarAoCarrinho: () => {},
    removerDoCarrinho: () => {},
    removerTodosDoCarrinho: () => {},
    calcularSubtotalItem: () => 0,
    calcularSubtotalCarrinho: () => 0,
    limparCarrinho: () => {},
});

export const useCarrinho = () => useContext(CarrinhoContext);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
    const [carrinhoItems, setCarrinhoItems] = useState<Product[]>([]);
    const [itemCount, setItemCount] = useState(0);

    const adicionarAoCarrinho = (produto: Product) => {
        const produtoExistente = carrinhoItems.find(item => item.id === produto.id);
        if (produtoExistente) {
            const novoCarrinho = carrinhoItems.map(item =>
                item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCarrinhoItems(novoCarrinho);
        } else {
            setCarrinhoItems([...carrinhoItems, { ...produto, quantity: 1 }]);
        }
        setItemCount(itemCount + 1);
    };

    const removerDoCarrinho = (produtoId: number) => {
        const existingItem = carrinhoItems.find(item => item.id === produtoId);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                const newItems = carrinhoItems.map(item => {
                    if (item.id === produtoId) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                setCarrinhoItems(newItems);
                setItemCount(itemCount - 1);
            } else {
                setCarrinhoItems(carrinhoItems.filter(item => item.id !== produtoId));
                setItemCount(itemCount - 1);
            }
        }
    };

    const removerTodosDoCarrinho = (produtoId: number) => {
        const existingItem = carrinhoItems.find(item => item.id === produtoId);
        if (existingItem) {
            const quantidadeRemovida = existingItem.quantity;
            setCarrinhoItems(carrinhoItems.filter(item => item.id !== produtoId));
            setItemCount(itemCount - quantidadeRemovida);
        }
    };

    const calcularSubtotalItem = (produtoId: number) => {
        const item = carrinhoItems.find(item => item.id === produtoId);
        return item ? item.price * item.quantity : 0;
    };

    const calcularSubtotalCarrinho = () => {
        return carrinhoItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const limparCarrinho = () => {
        setCarrinhoItems([]);
        setItemCount(0);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinhoItems, itemCount, adicionarAoCarrinho, removerDoCarrinho, removerTodosDoCarrinho, calcularSubtotalItem, calcularSubtotalCarrinho, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}