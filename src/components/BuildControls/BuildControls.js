import classes from '@/components/BuildControls/BuildControls.module.css';
import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';
import proptypes from 'prop-types';

const controls = [
  { label: 'Salad', ingredient: 'salad' },
  { label: 'Bacon', ingredient: 'bacon' },
  { label: 'Cheese', ingredient: 'cheese' },
  { label: 'Meat', ingredient: 'meat' },
];

const BuildControls = ({
  onAddIngredient,
  onRemoveIngredient,
  controlsState,
}) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(({ label, ingredient }, index) => (
        <BuildControl
          key={index}
          label={label}
          isRemoveButtonDisabled={controlsState[ingredient].disabled}
          count={controlsState[ingredient].count}
          price={controlsState[ingredient].price}
          onAdd={() => {
            onAddIngredient(ingredient);
          }}
          onRemove={() => {
            onRemoveIngredient(ingredient);
          }}
        />
      ))}
    </div>
  );
};

BuildControls.propTypes = {
  onAddIngredient: proptypes.func.isRequired,
  onRemoveIngredient: proptypes.func.isRequired,
  controlsState: proptypes.object.isRequired,
};

export default BuildControls;
