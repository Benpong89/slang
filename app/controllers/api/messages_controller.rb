class Api::MessagesController < ApplicationController

  def create
    message = current_user.messages.build(message_params)
    if message.save
      ActionCable.server.broadcast 'line_channel',
                                   body:  message.content,
                                   username: message.user.username
    end
  end

end
