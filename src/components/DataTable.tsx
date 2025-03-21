import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  GridItem,
  GridLayout,
  H3,
  Input,
  Option,
  StackLayout,
} from "@salt-ds/core";
import { FilterIcon, SearchIcon } from "@salt-ds/icons";
import {
  TabBar,
  TabListNext,
  TabNext,
  TabNextTrigger,
  TabsNext,
} from "@salt-ds/lab";
import ChartExample from "./charts/AreaChart";

const DataTable = () => {
  const tabs = ["Home", "Transactions", "Loans"];

  return (
    <>
    <ChartExample data={ge}/>
    <StackLayout padding={2}>
      <TabsNext defaultValue={tabs[0]}>
        <TabBar inset divider style={{ width: "100%", padding: "0" }}>
          <TabListNext appearance="transparent" activeColor="tertiary">
            {tabs.map((label) => (
              <TabNext value={label} key={label}>
                <TabNextTrigger>{label}</TabNextTrigger>
              </TabNext>
            ))}
          </TabListNext>
          <Dropdown style={{ width: "fit-content" }} >
            {tabs.map((color) => (
              <Option value={color} key={color} />
            ))}
          </Dropdown>
          <Button appearance="transparent">
            <FilterIcon aria-hidden /> Filter
          </Button>
        </TabBar>
      </TabsNext>
      <StackLayout direction="row" gap={2}>
        <StackLayout>
          <Input
            startAdornment={
              <Button>
                <SearchIcon />
              </Button>
            }
            defaultValue=""
          />
          <Card>
            <H3>Sort By</H3>
            <CheckboxGroup>
              {tabs.map((tab) => (
                <Checkbox value={tab} label={tab} key={tab} />
              ))}
            </CheckboxGroup>
          </Card>
        </StackLayout>
        <Card style={{ flex: 1 }}>
          <GridLayout
            columns={"repeat(4, 1fr)"}
            rows={"repeat(10, auto)"}
          >
            {Array.from({ length: 40 }, (_, index) => (
              <GridItem key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {index}
              </GridItem>
            ))}
          </GridLayout>
        </Card>
      </StackLayout>
    </StackLayout>
    </>
  );
};

export default DataTable;
