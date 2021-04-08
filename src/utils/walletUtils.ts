export default class walletUtils {

    static getRandomEmoji = () => {
        const emojis = ['😎', '😐', '😦'];

        const i = Math.floor(Math.random() * emojis.length);

        return emojis[i];
    };

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

}