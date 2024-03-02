import Link from "next/link";
import classes from "./event-item.module.css";
function EventItem(props) {
  const { title, image, data, location, id } = props;
  const humanReadableDate = new Date(data).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summery}>
          <h2>{title}</h2>
          <div className={classes.data}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
          <div className={classes.action}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
