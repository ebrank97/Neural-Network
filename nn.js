//Activation Function(Sigmoid Function)
function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
}


class NeuralNetwork{
  constructor(inputNodes, hiddenNodes, outputNodes){
    this.inputNodes = inputNodes;
    this.hiddenNodes = hiddenNodes;
    this.outputnodes = outputNodes;

    this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes);
    this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes);

    this.weightsIH.randomize();
    this.weightsHO.randomize();

    this.hiddenBias = new Matrix(this.hiddenNodes, 1);
    this.hiddenBias.randomize();

    this.outputBias = new Matrix(this.outputNodes, 1);
    this.outputBias.randomize();
  }

  feedForward(inputArray){

        //Generating the hidden outputs
        let inputs = Matrix.fromArray(inputArray);
        let hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden.add(this.hiddenBias);
        //activation functionhidden
        hidden.map(sigmoid);

        //Generating the output
        let output = Matrix.multiply(this.weightsHO, hidden);
        output.add(this.outputBias);
        output.map(sigmoid);
        return output.toArray();
  }

}
