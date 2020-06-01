import CarList from './carlist.jsx';
import TopSlideShow from './topSlideshow.jsx';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getCars, deleteCar, getBrands } from "../services/carService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";





class Cars extends Component {
  state = {
    cars: [],
    brands: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedBrand: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getBrands();
    const brands = [{ _id: "", name: "All Brands" }, ...data];

    const { data: cars } = await getCars();
    this.setState({ cars, brands });
  }

  // handleDelete = async movie => {
  //     const originalMovies = this.state.movies;
  //     const movies = originalMovies.filter(m => m._id !== movie._id);
  //     this.setState({ movies });

  //     try {
  //         await deleteMovie(movie._id);
  //     }
  //     catch (ex) {
  //         if (ex.response && ex.response.status === 404)
  //             toast.error("This movie has already been deleted.");

  //         this.setState({ movies: originalMovies });
  //     }
  // };

  // handleLike = movie => {
  //     const movies = [...this.state.movies];
  //     const index = movies.indexOf(movie);
  //     movies[index] = { ...movies[index] };
  //     movies[index].liked = !movies[index].liked;
  //     this.setState({ movies });
  // };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // // getPagedData = () => {
  // //     const {
  // //         pageSize,
  // //         currentPage,
  // //         sortColumn,
  // //         selectedBrand,
  // //         searchQuery,
  // //         cars: allCars
  // //     } = this.state;

  // //     let filtered = allCars;
  // //     if (searchQuery)
  // //         filtered = allCars.filter(m =>
  // //             m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  // //         );
  // //     else if (selectedBrand && selectedBrand._id)
  // //         filtered = allCars.filter(m => m.genre._id === selectedBrand._id);

  // //     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  // //     const movies = paginate(sorted, currentPage, pageSize);

  // //     return { totalCount: filtered.length, data: movies };
  // // };
  // render() {
  //     const { length: count } = this.state.movies;
  //     const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
  //     const { user } = this.props;

  //     if (count === 0) return <p>There are no movies in the database.</p>;

  //     const { totalCount, data: movies } = this.getPagedData();

  //     return (
  //         <div className="row">
  //     <div className="col-3">
  //       <ListGroup
  //         items={this.state.genres}
  //         selectedItem={this.state.selectedGenre}
  //         onItemSelect={this.handleGenreSelect}
  //       />
  //     </div>
  //     <div className="col">
  //       {user && (
  //         <Link
  //           to="/movies/new"
  //           className="btn btn-primary"
  //           style={{ marginBottom: 20 }}
  //         >
  //           New Movie
  //         </Link>
  //       )}
  //       <p>Showing {totalCount} movies in the database.</p>
  //       <SearchBox value={searchQuery} onChange={this.handleSearch} />
  //       <MoviesTable
  //         movies={movies}
  //         sortColumn={sortColumn}
  //         onLike={this.handleLike}
  //         onDelete={this.handleDelete}
  //         onSort={this.handleSort}
  //       />
  //       <Pagination
  //         itemsCount={totalCount}
  //         pageSize={pageSize}
  //         currentPage={currentPage}
  //         onPageChange={this.handlePageChange}
  //       />
  //     </div>
  //   </div>
  //     );
  // }

  render() {
    return (
      <div>
          <TopSlideShow />
        <CarList/>
        </div>
    )
  }

}

export default Cars;
