import React from 'react';

const withDetails = (View, getData, getImageUrl, itemId) => {
  return class extends React.Component {
    state = {
      data: null,
      image: null
    };

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }
    updateItem = () => {
      if (!itemId) return;

      getData(itemId).then(data =>
        this.setState({ data, image: getImageUrl(itemId) })
      );
    };

    // updateItem = () => {
    //   const { itemId, getData, getImageUrl } = this.props;

    //   if (!itemId) return;

    //   getData(itemId).then(item =>
    //     this.setState({ item, image: getImageUrl(item) })
    //   );
    // };

    render() {
      const { data, image } = this.state;
      return <View {...this.props} item={data} image={image} />;
    }
  };
};

export default withDetails;
