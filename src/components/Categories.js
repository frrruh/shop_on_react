import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All',
                },
                {
                    key: 'science',
                    name: 'Science fiction',
                },
                {
                    key: 'thriller',
                    name: 'Thriller',
                },
                {
                    key: 'historical',
                    name: 'Historical',
                },
                {
                    key: 'fantasy',
                    name: 'Fantasy',
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={()=> this.props.choseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories