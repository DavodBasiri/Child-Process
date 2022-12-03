const Mongoose = require("mongoose");
//-----------------------------
const Schema = Mongoose.Schema;
const PairSchema = new Schema({
    /*
    Pancake Swap Pairs Response
    https://api.pancakeswap.info/api/v2/pairs
    */
    base_address: { type: String, require: true },
    quote_address: { type: String, require: true },
    pair_address: { type: String, require: true, unique: true },
    price: { type: String, default: 'a' },
    liquidity: { type: String, default: 'a' },
    liquidity_BNB: { type: String, default: 'a' },
    pair_name: { type: String, default: 'a' },
    pair_decimals: { type: Number, default: 0 },
    pair_totalSupply: { type: String, default: 'a' },
    pair_poolCreated: { type: String },
    pair_holdercount: { type: Number, default: 0 },
    pair_dexFactoryAddress: { type: String, default: '63146889a71308027bdec5b1' },
    pair_blockNumber: { type: Number, require: true },
    pair_transactionHash: { type: String, require: true },
    isCheck: { type: Boolean, default: false },
    isSend: { type: Boolean, default: false },
    isValidate: { type: Boolean, default: false },
    isDone: { type: Boolean, default: false },

},
    {
        timestamps: true, collection: "pair"
    }
);

module.exports = Mongoose.model("pair", PairSchema)