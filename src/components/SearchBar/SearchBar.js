import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.css';

export class Searchbar extends Component {

  state = {
    searchQuery: '',
  }

  onChangeHandle = (event)=>{
    /* const { value } = event.target; */
    this.setState((state)=> {return {searchQuery: event.target.value}});
    //console.log(this.state.searchQuery);
  }

  clearInputString = function () {
    this.setState({searchQuery: ''});
  }
  
  onSubmitHandle = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.clearInputString();
  }

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.onSubmitHandle}>
          <button type="submit" className={s.btn}>
            <span className={s.btnLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Type here for images and photos search"
            onChange={this.onChangeHandle}
          />
        </form>
      </header>
    );
  }
}

 Searchbar.propTypes = {
     onSubmit: PropTypes.func.isRequired,
     isLoading: PropTypes.bool.isRequired,
 }