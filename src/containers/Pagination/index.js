import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {
        totalItems: 0,
        totalPages: 0,
        curPage: 1,
        startIndex: 0,
        endIndex: 0,
        pages: [],
        startPage: 0,
        endPage: 0,
        pageSize: 0
      }
    };
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initalPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset pages if items array has been changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initalPage);
    }
  }

  setPage = page => {
    let items = this.props.items;
    let pager = this.state.pager;
    if (page < 1) {
      return;
    }
    pager = this.getPager(items.length, page);
    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    this.setState({ pager });
    this.props.onChangePage(pageOfItems);
  };

  getPager = (totalItems, curPage = 1, pageSize = 5) => {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (curPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (curPage + 4 >= totalPages) {
        startPage = curPage - 9;
        endPage = totalPages;
      } else {
        startPage = curPage - 5;
        endPage = curPage + 4;
      }
    }

    // calculate start and end page index
    let startIndex = (curPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return {
      totalItems,
      curPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  };

  render() {
    const pager = this.state.pager;
    return (
      <ul className="pagination">
        <li className="page-item">
          {pager.curPage === 1 ? '' : <a className="page-link" onClick={() => this.setPage(pager.curPage - 1)} href="#">Previous</a>}
        </li>
        {pager.pages.map(page => {
          return (
            <li key={page} className="page-item">
              <a onClick={() => this.setPage(page)} className="page-link" href="#">{page}</a>
            </li>
          );
        })}
        <li className="page-item">
          {pager.curPage === pager.totalPages ? '' : <a onClick={() => this.setPage(pager.curPage + 1)} className="page-link" href="#">Next</a>}
        </li>
      </ul>
    );
  }
}

export default Pagination;