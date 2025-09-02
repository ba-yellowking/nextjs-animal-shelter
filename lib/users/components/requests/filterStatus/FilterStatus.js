import classes from "./FilterStatus.module.css";

export default function FilterStatus({ filter, setFilter }) {
  return (
    <div className={classes.filter}>
      <label htmlFor="status">Sort by status:</label>

      <select
        id="status"
        className={classes.check}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="fulfilled">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}
