import { Grid, Typography } from "@mui/material";
import CardsItem from "./CardsItem";

const CardsList = ({ data }: any) => {
  //useFlexbox
  return (
    <div className="flex flex-wrap w-full h-full justify-center">
      {data?.map((item: any, key: any) => (
        <CardsItem key={key} data={item} />
      ))}
    </div>
  );

  // return (
  //   <Grid
  //     container
  //     spacing={{ xs: 2, md: 3 }}
  //     columns={{ xs: 4, sm: 8, md: 12 }}
  //   >
  //     {data?.map((item: any, key: any) => (
  //       <CardsItem key={key} data={item} />
  //     ))}
  //   </Grid>
  // );
};

export default CardsList;
