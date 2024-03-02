import { getFeaturedEvent } from "@/dummy";
import EventList from "@/components/events/event-list";
function HomePage() {
  const featuredEvents = getFeaturedEvent();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
