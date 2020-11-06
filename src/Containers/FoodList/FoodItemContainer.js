import { connect } from 'react-redux';

import Pizze from '../../components/Main/FoodList/Pizze';
import Tagliate from '../../components/Main/FoodList/Tagliate';
import LaCarne from '../../components/Main/FoodList/LaCarne';
import Pasta from '../../components/Main/FoodList/Pasta';
import Vins from '../../components/Main/FoodList/Vins';
import Desserts from '../../components/Main/FoodList/Desserts';
import Cocktails from '../../components/Main/FoodList/Cocktails';
import Cichetteria from '../../components/Main/FoodList/Cichetteria';
import Boissons from '../../components/Main/FoodList/Boissons';
import Antipasti from '../../components/Main/FoodList/Antipasti';

import { setCategory, openDeleteModal } from '../../actions/Tdo';

const mapStateToProps = (state) => ({
  dishes: state.dishesToLoad,
  category: state.category,
});

const mapDispatchToProps = {
  setCategory,
  openDeleteModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Pizze,
  Tagliate,
  LaCarne,
  Pasta,
  Vins,
  Desserts,
  Cocktails,
  Cichetteria,
  Boissons,
  Antipasti,
);
