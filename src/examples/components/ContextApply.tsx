import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

const LocaleTogglerButton = () => (
  <div>
    <LocaleContext.Consumer>
      {({ locale, toggleLocale }) => (
        <button type="button" onClick={toggleLocale}>
          Toggle Locale from {locale}
        </button>
      )}
    </LocaleContext.Consumer>
  </div>
);

const Text = () => <LocaleContext.Consumer>{({ locale }) => <h2>{locale}</h2>}</LocaleContext.Consumer>;

// const Text = () => {
//   const { locale } = useContext(LocaleContext);

//   return <h2>{locale}</h2>;
// };

class ContextApply extends React.PureComponent<unknown, { locale: string; toggleLocale: () => void }> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      locale: 'cs',
      toggleLocale: this.toggleLocale,
    };
  }

  toggleLocale = () => {
    this.setState(state => ({
      locale: state.locale === 'en' ? 'cs' : 'en',
    }));
  };

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        <LocaleTogglerButton />
        <Text />
      </LocaleContext.Provider>
    );
  }
}

export default ContextApply;
