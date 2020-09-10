import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ambilData} from "../action/index"

export class ListProduct extends Component {

    componentDidMount() {
        this.props.ambilData()
    }

    renderList() {
        return this.props.listProduct.map(product => {
            return (
                <div key={product.id}>
                    <h2>{product.namaproduct}</h2>
                </div>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const stateToProps = (state) => {
    return {
        listProduct : state.listProduct
    }
}

export default connect(stateToProps, {ambilData})(ListProduct)