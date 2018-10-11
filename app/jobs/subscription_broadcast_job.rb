# class SubscriptionBroadcastJob < ApplicationJob
#   queue_as :default
#
#   def perform(subscription)
#     LineChannel.broadcast_to('line_channel', subscription: render_subscription(subscription))
#   end
#
#   private
#
#   def render_subscription(subscription)
#     ApplicationController.renderer.render(partial: 'api/subscriptions/subscription', locals: { subscription: subscription })
#   end
# end
