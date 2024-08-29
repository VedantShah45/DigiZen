import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["wicket-keeper", "spinner", "fastbowler", "bowling-allrounder", "batting-allrounder"],
        required: true
    },
    dominantArm: {
        type: String,
        enum: ["left", "right"],
        default:"right"
    },
    battingAverage: {
        type: Number,
        default: 0
    },
    battingStrikeRate: {
        type: Number,
        default: 0
    },
    bowlingAverage: {
        type: Number,
        default: 0
    },
    bowlingStrikeRate: {
        type: Number,
        default: 0
    },
    centuries: {
        type: Number,
        default: 0,
    },
    wickets: {
        type: Number,
        default: 0,
    },
    position: {
        type: Number,
        default: 5
    },
    club: {
        type: String,
        default: "None"
    },
    rating: {
        type: Number,
        default: 0
    },
    image: {
        url: String,
        public_id: String,
    }
}, { timestamps: true });

export const PlayerModel = mongoose.model('Player', PlayerSchema);
