import React, { useEffect, useState } from "react";
// import Loadscreen from '../loadscreen/Loadscreen'
import { Outlet } from "react-router";
import TenantHeader from "../../components/tenantheader/TenantHeader";
import TenantFooter from "../../components/tenantfooter/TenantFooter";
import Loadscreen from "../../loadscreen/Loadscreen";

const TenantLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return isLoading ? (
    <Loadscreen />
  ) : (
    <div>
      <TenantHeader />
      <Outlet />
      <TenantFooter />
    </div>
  );
};

export default TenantLandingPage;
