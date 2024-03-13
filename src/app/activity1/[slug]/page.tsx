import PageOne from "@/components/activity1/PageOne";
import PageTwo from "@/components/activity1/PageTwo";
import PageThree from "@/components/activity1/PageThree";

const page = ({ params }: { params: { slug: string } }) => {
  const renderActivityPage = () => {
    switch (params.slug) {
      case "pageOne":
        return <PageOne />;
      case "pageTwo":
        return <PageTwo />;
      case "pageThree":
        return <PageThree />;

      default:
        return <PageOne />;
    }
  };

  return renderActivityPage();
};

export default page;
