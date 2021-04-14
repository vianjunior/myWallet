import { uuid } from 'uuidv4';

export default class walletUtils {

    static getRandomEmoji = (): string => {
        const emojis = ['😎', '😐', '😦'];

        const i = Math.floor(Math.random() * emojis.length);

        return emojis[i];
    };

    static getUUID = (): string => {
        return uuid();
    }

    static formatCurrency = (currency: string): string => {
        const numberCurrency = Number(currency); // converte param string p/ Number
        
        return numberCurrency.toLocaleString(
            'pt-br',
            {
                style: 'currency',
                currency: 'BRL'
            }
        )
    }

    static formatDate = (date: string): string => {
        const  paramToDate = new Date(date);

        const day = paramToDate.getDate() > 9 ? 
            paramToDate.getDate() : `0${paramToDate.getDate()}`;

        const month = paramToDate.getMonth() + 1 > 9 ? 
            paramToDate.getMonth() + 1 : `0${paramToDate.getMonth() + 1}`;

        const year = paramToDate.getFullYear();

        return `${day}/${month}/${year}`;
    }

    static getMonths = () => {
        const months = [
            {value: 1, label: 'Janeiro'},
            {value: 2, label: 'Fevereiro'},
            {value: 3, label: 'Março'},
            {value: 4, label: 'Abril'},
            {value: 5, label: 'Maio'},
            {value: 6, label: 'Junho'},
            {value: 7, label: 'Julho'},
            {value: 8, label: 'Agosto'},
            {value: 9, label: 'Setembro'},
            {value: 10, label: 'Outubro'},
            {value: 11, label: 'Novembro'},
            {value: 12, label: 'Dezembro'}
        ]

        return months;
    }

}