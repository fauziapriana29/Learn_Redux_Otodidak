
export const ambilData = () => {

    const data = [
        { id: 1, namaproduct: 'kipas angin', harga: '200000', stok: 20 },
        { id: 2, namaproduct: 'Mesin Cuci', harga: '1500000', stok: 8 },
        { id: 3, namaproduct: 'Kulkas', harga: '2500000', stok: 5 },
        { id: 4, namaproduct: 'Televisi', harga: '1000000', stok: 10 },
        { id: 5, namaproduct: 'Laptop', harga: '7500000', stok: 5 },
        { id: 6, namaproduct: 'Rice Coocker', harga: '150000', stok: 20 }
    ]

    return {
        type: "AMBIL_DATA",
        data: data
    }
}