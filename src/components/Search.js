import React from 'react'
import { Box, TextField } from '@material-ui/core'
import data from '../resources/city.list.json'
import { Autocomplete } from '@material-ui/lab'

const optionLimit = 20

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.handleFilter = this.handleFilter.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      cities: data.slice(0, optionLimit),
    }
  }

  handleFilter (event) {
    const keyword = event.target.value.toLowerCase()

    const result = data.filter(
      item => item.name.toLowerCase().includes(keyword),
    )

    this.setState({ cities: result.slice(0, optionLimit) })
  }

  getOptionLabel (option) {
    let result = option.name

    if (option.state) {
      result += ', state: ' + option.state
    }

    result += ' (' + option.country + ')'

    return result
  }

  handleChange (event, value) {
    this.props.onSearch(value)
  }

  render () {
    return (
      <Box>
        <Autocomplete
          id="combo-box-demo"
          options={this.state.cities}
          getOptionLabel={(option) => this.getOptionLabel(option)}
          onChange={this.handleChange}
          style={{ width: 300 }}
          renderInput={(params) =>
            <TextField
              {...params}
              label="Search city..."
              variant="outlined"
              onChange={this.handleFilter}
            />
          }
        />
      </Box>
    )
  }
}

export default Search
