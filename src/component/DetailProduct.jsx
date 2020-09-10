import React from 'react'
import {connect} from 'react-redux'

function DetailPruduct({product}) {
    // console.log(props.product)

    if (!product) {
        return <div><h3>Pilih Product</h3></div>
    }

    const { id, namaproduct, harga, stok } = product
    return (
        <div>
            <h2>Nama Product : {namaproduct}</h2>
            <h3>Id : {id}</h3>
            <h4>Harga : Rp.{harga}</h4>
            <h4>Stok : {stok}</h4>
        </div>
    )
}

const stateToProps = (state) => {
    return { product : state.pilihan}
}

export default connect(stateToProps) (DetailPruduct)