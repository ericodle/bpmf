module ApplicationHelper
  def simple_format(text)
    return "" if text.blank?
    text.split("\n").map { |line| "<p>#{h(line)}</p>" }.join.html_safe
  end
  
  def h(text)
    ERB::Util.html_escape(text)
  end
end

