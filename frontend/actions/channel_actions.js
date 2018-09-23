import * as ChannelsAPIUtil from "../util/channels_api_util";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

export const receiveChannel = ({ channel, subscription }) => ({
  type: RECEIVE_CHANNEL,
  channel,
  subscription
});

export const receiveCurrentChannel = channel => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
});

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const requestCurrentChannel = id => dispatch =>
  ChannelsAPIUtil.fetchChannel(id).then(currentChannelId =>
    dispatch(receiveCurrentChannel(currentChannelId))
  );

export const createChannel = channel => dispatch =>
  ChannelsAPIUtil.createChannel(channel).then(channel =>
    dispatch(receiveChannel(channel))
  );

export const requestChannel = channel => dispatch =>
  ChannelsAPIUtil.fetchChannel(channel).then(channel =>
    dispatch(receiveChannel(channel))
  );

export const requestAllChannels = () => dispatch =>
  ChannelsAPIUtil.fetchAllChannels().then(channels =>
    dispatch(receiveAllChannels(channels))
  );
