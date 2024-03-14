import PageOne from "@/components/activity1/PageOne";
import PageTwo from "@/components/activity1/PageTwo";
import PageThree from "@/components/activity1/PageThree";
import PageFour from "@/components/activity1/PageFour";
import PageFive from "@/components/activity1/pageFive/PageFive";
import PageSix from "@/components/activity1/pageSix/PageSix";

const page = ({ params }: { params: { slug: string } }) => {
  const renderActivityPage = () => {
    switch (params.slug) {
      case "pageOne":
        return <PageOne />;
      case "pageTwo":
        return <PageTwo />;
      case "pageThree":
        return <PageThree />;
      case "pageFour":
        return <PageFour />;
      case "pageFive":
        return <PageFive />;
      case "pageSix":
        return <PageSix />;

      default:
        return <PageOne />;
    }
  };

  return renderActivityPage();
};

export default page;
