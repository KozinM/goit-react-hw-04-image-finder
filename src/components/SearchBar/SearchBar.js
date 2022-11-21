import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.css';


export const Searchbar = ({onSubmit}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeHandle = (event)=>{
    /* const { value } = event.target; */
    setSearchQuery(event.target.value);
    //this.setState((state)=> {return {searchQuery: event.target.value}});
    //console.log(this.state.searchQuery);
  }
  const clearInputString = () => {
    setSearchQuery('');
  }
  
  const onSubmitHandle = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
    clearInputString();
  }
  return (
    <header className={s.header}>
        <form className={s.form} onSubmit={onSubmitHandle}>
          <button type="submit" className={s.btn}>
            <span className={s.btnLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Type here for images and photos search"
            onChange={onChangeHandle}
          />
        </form>
      </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
/* export class Searchbar extends Component {

  state = {
    searchQuery: '',
  }

  onChangeHandle = (event)=>{
    this.setState((state)=> {return {searchQuery: event.target.value}});
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
 } */