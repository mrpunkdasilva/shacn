import {AppBarChart, AppAreaChart, AppPieChart} from "@/components/charts";
import {CardList} from "@/components/CardList";

export default function HomePage() {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"}>
      <div className="bg-primary-foreground p-4 rounted-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounted-lg">
        <CardList title="Latest Transactions"/>
      </div>
      <div className="bg-primary-foreground p-4 rounted-lg">
        <AppPieChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounted-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounted-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounted-lg">Test</div>
    </div>
  );
}
