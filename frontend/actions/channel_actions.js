import * as ChannelsAPIUtil from "../util/channels_api_util";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const createChannel = channel => dispatch =>
  ChannelsAPIUtil.createChannel(channel).then(channel =>
    dispatch(receiveChannel(channel))
  );

export const requestChannel = channel => dispatch =>
  ChannelsAPIUtil.fetchChannel(channel).then(
    channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const requestAllChannels = () => dispatch =>
  ChannelsAPIUtil.fetchAllChannels().then(channels =>
    dispatch(receiveAllChannels(channels))
  );