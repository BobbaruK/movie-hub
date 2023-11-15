import useFilters from "../../hooks/useFilters";

export const enum SortBy {
  popularityAsc = "popularity.asc",
  popularityDesc = "popularity.desc",
  revenueAsc = "revenue.asc",
  revenueDesc = "revenue.desc",
  releaseDateAsc = "primary_release_date.asc",
  releaseDateDesc = "primary_release_date.desc",
  voteAverageAsc = "vote_average.asc",
  voteAverageDesc = "vote_average.desc",
  voteCountAsc = "vote_count.asc",
  voteCountDesc = "vote_count.desc",
}

const Sorting = () => {
  const sorter = [
    {
      value: SortBy.popularityAsc,
      label: "Popularity ASC",
    },
    {
      value: SortBy.popularityDesc,
      label: "Popularity DESC",
    },
    {
      value: SortBy.revenueAsc,
      label: "Revenue ASC",
    },
    {
      value: SortBy.revenueDesc,
      label: "Revenue DESC",
    },
    {
      value: SortBy.releaseDateAsc,
      label: "Release Date ASC",
    },
    {
      value: SortBy.releaseDateDesc,
      label: "Release Date DESC",
    },
    {
      value: SortBy.voteAverageAsc,
      label: "Average Votes ASC",
    },
    {
      value: SortBy.voteAverageDesc,
      label: "Average Votes DESC",
    },
    {
      value: SortBy.voteCountAsc,
      label: "Vote Count ASC",
    },
    {
      value: SortBy.voteCountDesc,
      label: "Vote Count DESC",
    },
  ];

  const { filters, filterBy } = useFilters();

  return (
    <>
      <div className={["h3", "sidebar__title"].join(" ")}>Sorting</div>
      <select
        onChange={(e) => {
          filterBy({
            type: "Sorting",
            sorting: e.target.value,
          });
        }}
        className={["form-select", "mb-5"].join(" ")}
        value={filters.sorting}>
        {sorter.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sorting;