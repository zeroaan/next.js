import { StylesProvider } from "@material-ui/core";
import Layout from "../../components/Layout/Layout";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <div>
        <div className={StylesProvider.overview_panel}>
          <img src={country.flag} alt={country.name} />
          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>

        <div className={styles.details_panel}>
          <h4 className={styles.details_panel_heading}>Details</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://restcountries.eu/rest/v2/alpha/${params.id}`);

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
