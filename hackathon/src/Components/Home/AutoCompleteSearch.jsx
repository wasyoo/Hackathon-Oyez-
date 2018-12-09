import React, { Component } from 'react';
import _ from 'lodash';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

const source = [
  {
    id: 1,
    title: 'Ojja mergez',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus numquam iure quia quo dicta qui! Iste quibusdam vero explicabo',
  },
  {
    id: 2,
    title: 'Kammounia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus numquam iure quia quo dicta qui! Iste quibusdam vero explicabo',
  },
  {
    id: 3,
    title: 'chminka',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus numquam iure quia quo dicta qui! Iste quibusdam vero explicabo',
  },
  {
    id: 3,
    title: 'chminka',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus numquam iure quia quo dicta qui! Iste quibusdam vero explicabo',
  },
];


class AutoComplete extends Component {
    componentWillMount() {
      this.resetComponent()
    }
  
    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })
  
    handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })
      
  
      setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent()
  
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = result => re.test(result.title)
        
  
        this.setState({
          isLoading: false,
          results: _.filter(source, isMatch),
        })
      }, 300)
    }
  
    render() {
      const { isLoading, value, results } = this.state
  
      return (
        <Grid style={{marginTop:"200px"}}>
          <Grid.Column width={6}>
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
      )
    }
  }

export default AutoComplete;
