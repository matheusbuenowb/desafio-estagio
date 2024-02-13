// ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar uma página de erro personalizada aqui
      return <h1>Algo deu errado. Por favor, tente novamente mais tarde.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
